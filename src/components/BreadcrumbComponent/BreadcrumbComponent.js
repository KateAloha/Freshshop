function BreadcrumbComponent({ BreadcrumbChild}) {

    return (
        <div className="all-title-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>{BreadcrumbChild}</h2>
                        <ul className="breadcrumb" style={{ padding: "10px" }}>
                            <li className="breadcrumb-item"><a href="/">HOME</a></li>
                            <li className="breadcrumb-item active">{BreadcrumbChild}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadcrumbComponent