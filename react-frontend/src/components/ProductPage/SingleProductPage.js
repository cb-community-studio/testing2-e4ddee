import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputSwitch } from 'primereact/inputswitch';
import { Badge } from 'primereact/badge';
import { Calendar } from 'primereact/calendar';

const SingleProductPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("product")
            .get(urlParams.singleProductId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Product", type: "error", message: error.message || "Failed get product" });
            });
    }, []);

    const goBack = () => {
        history.replace("/product");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Product</h3>
                </div>
                <p>product/{urlParams.singleProductId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">Product Name</label>
                    <p className="m-0" >{data?.Productname}</p>
                    <label className="text-sm">BooleanProduct</label>
                    <InputSwitch checked={rowData.{data?.BooleanProduct}} onChange={ (e) => setValByKey("{data?.BooleanProduct}", e.value)}  />
                    <label className="text-sm">ProductBadge</label>
                    <InputText className="w-full mb-3" value={_entity?.{data?.ProductBadge}} onChange={(e) => setValByKey("{data?.ProductBadge}", e.target.value)}  />
                    <label className="text-sm">Product Launch</label>
                    <Calendar dateFormat="dd/mm/yy hh:mm" placeholder={"dd/mm/yy hh:mm"} value={_entity?.{data?.Created}} onChange={ (e) => setValByKey("{data?.Created}", e.target.value)} showTime ></Calendar>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleProductPage);
