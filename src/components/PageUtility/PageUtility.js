import React from "react";
import "../PageUtility/PageUtility.css";
import PrintWindow from "../PrintWindow/PrintWindow";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WeiboShareButton, WeiboIcon, EmailShareButton, EmailIcon } from "react-share";



let PageUtility = props => {

  let printImg = () => {
    let menuImgEl = document.getElementById("menuImg");
    let myImg = menuImgEl.innerHTML = `<img src=${menuImgEl.src}>`
    const orderHtml = `<html><head><title></title></head><body>${myImg}</body></html>`
    document.body.innerHTML = orderHtml;
    window.print();
    window.location.reload();
  }
  
  let grabHref = () => {
    let menuImgEl = document.getElementById("menuImg")
    let menuImg = menuImgEl.src
    let saveEl = document.getElementById("save-button");
    saveEl.href = menuImg;
  }
  return (
    <div className="row" id="pageUtility">
      <div className="col-sm-9"></div>
      <div className="col-sm-3">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
           <ShareButton />
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1" type="button" onClick={printImg}>
              <i className="fas fa-print"></i>
              <PrintWindow namesId="imgPrint"/>
            </a>
          </li>
          <li className="list-inline-item">
            <a download="menu.jpg" className="btn-floating btn-tw mx-1" href="#" onClick={grabHref} title="Menu" id="save-button">
              <i className="fas fa-download"> </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageUtility;

let ShareButton = props => {
  let handleClick = () => {
    return <ShareModal />
  }
  return (
    <>
     <a className="btn-floating btn-fb mx-1" id="share" type="button" data-toggle="modal" data-target="#ModalCenter" onClick={handleClick}>
              <i className="fas fa-share-alt"></i>
            </a>
    <ShareModal />
    </>
  )
}

let ShareModal = props => {
  const shareUrl = 'https://blendityhealthy.com';
  const title = 'Blend It Healthy';
  return (
<div className="modal fade" id="ModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="ModalCenterTitle">Share This On Social Media!</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <FacebookShareButton url={shareUrl} quote={title} className="FB-Sharebutton">
          <FacebookIcon size={48} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} quote={title} className="Twitter-Sharebutton">
          <TwitterIcon size={48} round />
        </TwitterShareButton>
        <WeiboShareButton url={shareUrl} quote={title} className="Weibo-Sharebutton">
          <WeiboIcon size={48} round />
        </WeiboShareButton>
        <EmailShareButton url={shareUrl} quote={title} className="Email-Sharebutton">
          <EmailIcon size={48} round />
        </EmailShareButton>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )
}

