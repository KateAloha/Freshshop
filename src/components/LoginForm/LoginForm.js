import { Snackbar, Alert } from "@mui/material";
import { Button, Col, Row, Input } from "reactstrap"
import "./LoginForm.css"
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import auth from "../../firebase";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createNewCus, getCusData, GoogleLogin, inpAdressSignUp, inpCitySignUp, inpCountrySignUp, inpEmailLogin, inpEmailSignUp, inpFullNameSignUp, inpPasswordLogin, inpPasswordSignUp, inpPhoneSignUp } from "../../actions/CustomerAction";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../FooterComponent/FooterComponent";
const provider = new GoogleAuthProvider();


function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [login, setLogin] = useState(true)
    const [alert, setAlert] = useState(false);
    const [textAlert, setTextAlert] = useState("");
    const [alertColor, setAlertColor] = useState("error");
    const [btnLoginClick, setBtnLoginClick] = useState(false)
    const checkout = JSON.parse(localStorage.getItem('checkout'))

    const { userGoogle,
        passwordLogin,
        emailLogin,
        fullNameSignUp,
        phoneSignUp,
        emailSignUp,
        addressSignUp,
        citySignUp,
        countrySignUp,
        passwordSignUp,
        customerData,
        newCustomer } = useSelector((reduxData) => reduxData.CustomerReducer)

    const onBtnSignUp = () => {
        setLogin(false)
    }

    const onBtnLogin = () => {
        setLogin(true)
    }

    const handleCloseAlert = () => {
        setAlert(false)
    }

    const onEmailLogin = (event) => {
        dispatch(inpEmailLogin(event.target.value))
    }

    const onPasswordLogin = (event) => {
        dispatch(inpPasswordLogin(event.target.value))
    }

    const onFullNameSignUp = (event) => {
        console.log(event)
        dispatch(inpFullNameSignUp(event.target.value))
    }

    const onPhoneSignUp = (event) => {
        dispatch(inpPhoneSignUp(event.target.value))
    }

    const onEmailSignUp = (event) => {
        dispatch(inpEmailSignUp(event.target.value))
    }

    const onAddressSignUp = (event) => {
        dispatch(inpAdressSignUp(event.target.value))
    }

    const onCitySignUp = (event) => {
        dispatch(inpCitySignUp(event.target.value))
    }

    const onCountrySignUp = (event) => {
        dispatch(inpCountrySignUp(event.target.value))
    }

    const onPasswordSignUp = (event) => {
        dispatch(inpPasswordSignUp(event.target.value))
    }

    const onBtnConfirmLoginClick = () => {
        setBtnLoginClick(true)
        let LoginData = customerData.filter((value, index) => {
            return value.email === emailLogin && value.password === passwordLogin
        })

        if (LoginData.length > 0) {
            setAlert(true)
            setAlertColor("success")
            setTextAlert("Login Successfully!")
            localStorage.setItem("user",JSON.stringify(LoginData[0]) )
            if (checkout) {
                navigate('/checkout')
            } else {
                navigate('/home')
            }
        } else {
            setAlert(false)
            setAlertColor("error")
            setTextAlert("Your email or your password information is incorrect! Please check again!")
        }
    }

    const onBtnConfirmSignUpClick = () => {
        var newCustomerCheck = {
            fullName: fullNameSignUp,
            phone: Number(phoneSignUp),
            email: emailSignUp,
            address: addressSignUp,
            city: citySignUp,
            country: countrySignUp,
            password: passwordSignUp
        }
        const validate = validateNewCustomer(newCustomerCheck)
        if (validate) {
            const newCustomerData = {
                fullName: newCustomerCheck.fullName,
                phone: newCustomerCheck.phone,
                email: newCustomerCheck.email,
                address: newCustomerCheck.address,
                city: newCustomerCheck.city,
                country: newCustomerCheck.country,
                password: newCustomerCheck.password,
            }
            dispatch(createNewCus(newCustomerData, setAlert, setAlertColor, setTextAlert))

        }
        
    }

    const validateNewCustomer = (paramNewCustomer) => {
        const checkNewCustomerEmail = customerData.some(customer =>
            customer.email === paramNewCustomer.email
        )
        // var phoneRegex = /^\d{10}$/
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
        if (paramNewCustomer.fullName === "") {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Please enter your Full Name")
            return false
        } else if ((isNaN(paramNewCustomer.phone)) || (paramNewCustomer.length < 10)) {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Your Phone Number is invalid! Please try again")
            return false
        } else if (paramNewCustomer.phone.length === 0) {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Your Phone Number is invalid! Please try again")
            return false
        } else if (checkNewCustomerEmail) {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Your email account already exists! Please Login By Google Account")
            return false
        } else if (!emailRegex.test(paramNewCustomer.email)) {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Your Email is invalid! Please try again")
            return false
        } else if (paramNewCustomer.email === "") {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Please enter your Email")
            return false
        } else if (paramNewCustomer.address === "") {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Please enter your Address")
            return false
        } else if (paramNewCustomer.city === "") {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Please enter your City")
            return false
        } else if (paramNewCustomer.country === "") {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Please enter your Country")
            return false
        } else if (!passRegex.test(paramNewCustomer.password)) {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Your password must between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
            return false
        } else if (paramNewCustomer.password.length === 0) {
            setAlert(true)
            setAlertColor("error")
            setTextAlert("Please enter your Password")
            return false
        }
        return true
    }

    const checkNewCustomerHandler = () => {
        const checkNewCustomerEmail = customerData.some(customer =>
            customer.email === userGoogle.email
        )

        if (checkNewCustomerEmail) {
            for (let i = 0; i < customerData.length; i++) {
                if (customerData[i].email == userGoogle.email) {
                    localStorage.setItem("user", JSON.stringify(customerData[i]))
                    if (checkout) {
                        navigate('/checkout')
                    } else {
                        navigate('/home')
                    }
                }
            }
        } else if (!checkNewCustomerEmail && userGoogle != null) {
            var newCustomerByMail = {
                fullName: userGoogle.displayName,
                email: userGoogle.email
            }

            dispatch(createNewCus(newCustomerByMail))
        }
    }

    useEffect(() => {
        dispatch(getCusData())
        if (userGoogle) {
            checkNewCustomerHandler()
        }
    }, [userGoogle, setBtnLoginClick])

    console.log(userGoogle)
    console.log(customerData)
    const loginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch(GoogleLogin(result.user))

            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <>
            <HeaderComponent></HeaderComponent>

            <div className="container" >
                <section className="login_box_area section_gap">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 text-center">
                                <div style={{ marginBottom: "150px" }}>
                                    {
                                        login ?
                                            <div className="largeBackGround">
                                                <div className="smallBackGround">
                                                    <Row>
                                                        <Col>
                                                            <Button className="signUpButton" onClick={onBtnSignUp}>Sign Up</Button>
                                                            <Button className="loginButton">Log In</Button>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <h2 className="textWelcome">Welcome Back!</h2>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Email Address*" className="input" value={emailLogin} onChange={onEmailLogin} id="emailLogin"></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Passwords*" className="input" value={passwordLogin} onChange={onPasswordLogin} id="passwordLogin"></Input>
                                                    </Row>
                                                    <Row>
                                                        <p className="textForgotPassword">Forgot Passwords</p>
                                                    </Row>
                                                    <Row>
                                                        <Button className="loginButtonLarge" onClick={onBtnConfirmLoginClick}>Log In</Button>
                                                    </Row>
                                                    <Row>
                                                        <Button className="loginGoogleButton" onClick={loginGoogle}>Log In Google</Button>
                                                    </Row>
                                                </div>
                                            </div>
                                            :
                                            <div className="largeBackGroundSignUp">
                                                <div className="smallBackGroundSignUp">
                                                    <Row>
                                                        <Col>
                                                            <Button className="loginButton" >Sign Up</Button>
                                                            <Button className="signUpButton" onClick={onBtnLogin}>Log In</Button>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <h2 className="textWelcome">Sign Up For Free</h2>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Full Name*" className="input" value={fullNameSignUp} onChange={onFullNameSignUp}></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Phone Number*" className="input" value={phoneSignUp} onChange={onPhoneSignUp}></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Email Address*" className="input" onChange={onEmailSignUp}></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Address*" className="input" onChange={onAddressSignUp}></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="City*" className="input" onChange={onCitySignUp}></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Country*" className="input" onChange={onCountrySignUp}></Input>
                                                    </Row>
                                                    <Row>
                                                        <Input placeholder="Set A Password*" className="input" onChange={onPasswordSignUp}></Input>
                                                    </Row>
                                                    <Row>
                                                        <Button className="loginButtonLarge" onClick={onBtnConfirmSignUpClick}>Get Started</Button>
                                                    </Row>
                                                </div>
                                            </div>
                                    }

                                </div>
                            </div>
                        </div>
                        <Snackbar
                            open={alert}
                            autoHideDuration={5000}
                            onClose={handleCloseAlert}
                        >
                            <Alert onClose={handleCloseAlert} severity={alertColor}>{textAlert}</Alert>
                        </Snackbar>
                    </div>
                </section>
            </div>

            {/* Start Footer */}
            <FooterComponent></FooterComponent>
        </>

    )
}

export default LoginForm