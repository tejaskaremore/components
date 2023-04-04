import TableHeader from './Table Content/TableHeader.js';
import TableData from './Table Content/TableData.js';
import './TableBody.css';

const TableBody = () => {

  const Tablevalue={

    company:"Table Company" ,
    contact:"contact" ,
    country:"country"

  };

  const TableArry =[
    { company:"Ernst Handel" ,
    contact:"Roland Mendel" ,
    country:"Austria",
  },

    { company:"Island Trading" ,
    contact:"Helen Bennett" ,
    country:"UK",
  },
  ];

    return (<div className='TableBody'>
      <h2>HTML Table</h2>

<table className='parent-Table'>
<TableHeader Tablevalue={Tablevalue}/>
  <TableData  TableArry={TableArry}/>
</table>

    </div>)
};
export default TableBody;