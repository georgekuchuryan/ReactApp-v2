import React from "react";
import { useNavigate } from "react-router-dom";
import "./CatalogItem.scss";

const CatalogItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className="CatalogItem">
      <div className="card shadow-sm">
        <div className="card-body">
          <img className="imgTel" src={props.url} alt="phone" />
          <p className="card-text">{props.name}</p>
          <p className="card-text">{props.color}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary view"
                onClick={() => navigate(`${props.id}`)}
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Buy
              </button>
            </div>
            <small className="textPrice">{props.price}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

CatalogItem.propTypes = {};

CatalogItem.defaultProps = {};

export default CatalogItem;
