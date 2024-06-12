interface IOption{

    fName : string ;
    lName : string ;
    Phone : number ;
    Email : string;
    gender : boolean
}


interface IProps{

    data :  IOption[];
    
}








const Droppable = (props:IProps)=>{

    const {data} = props


    return(


        

        <>

           {data.map((item,index)=>(
            <div key = {index}>
                <p> Your First Name is <strong>{item.fName}</strong></p>
                <p> Your Last Name is <strong>{item.lName}</strong></p>
                <p> Your Phone Number is <strong>{item.Phone}</strong></p>
                <p> Your Email is <strong>{item.Email}</strong></p>
                <p> Your Size is <strong>{item.gender ? "Male" : "Female"}</strong></p>  
   
                

                

            </div>
           ))}
        </>
    )
}


export default Droppable;