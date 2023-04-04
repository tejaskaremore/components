import TableContent from "./TableContent";

const TableHeader =(props)=>{

  // const Tablevalue= props.Tablevalue

   const {Tablevalue}=props;

    return(      <TableContent 
      
    company= {Tablevalue.company}

     contact={Tablevalue.contact}

     country={Tablevalue.country} />
    )
};
export default TableHeader;