
const Box = ({link,imgSrc,header}) => {
  return (
      
<div className="col-md-3">

     <a href={link} className="m-2">
     <div className="box-area w-100 p-2 ">
           <div className="box-center d-flex align-items-center justify-content-center flex-column">
             <img
               src={imgSrc}
               alt=""
             />
             <h4 className="box-header p-1 text-light text-center">{header}</h4>
           </div>
         </div>
         </a>

   


    </div>


  );
};

export default Box;
