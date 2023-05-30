import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows =[
        {
            id:1143155,
            product:'Acer Nitro 5',
            img:"https://m.media-amazon.com/images/I/712Exzpt6LL._AC_SL1500_.jpg",
            customer:"Alaa Ali",
            date:"1 March",
            amount:785,
            method:"Online card",
            status:"Pending"
        },
        {
            id:1176135,
            product:'Play station 5',
            img:"https://m.media-amazon.com/images/I/61SUJDrCTLL._SL1500_.jpg",
            customer:"Mohmoed Saif",
            date:"22 April",
            amount:900,
            method:"On store",
            status:"Approved"
        },
        {
            id:1234123,
            product:'Iphone 14',
            img:"https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_SL1000_.jpg",
            customer:"Ali Ali",
            date:"15 June",
            amount:699,
            method:"Cash on Delivery",
            status:"Approved"
        },
        {
            id:5678911,
            product:'Mac Bro',
            img:"https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg",
            customer:"Sharaf Osama",
            date:"11 Fabuary",
            amount:999,
            method:"Cash on Delivery",
            status:"Approved"
        },
    ]
    return (
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Traking ID</TableCell>
                <TableCell className="tableCell">Product</TableCell>
                <TableCell className="tableCell">Customer</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Pymant Method</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  
                >
                  <TableCell className="tableCell">{row.id}</TableCell>
                  <TableCell className="tableCell">
                      <div className="cellWrabber">
                        <img src={row.img}className="image"/>
                        {row.product}
                      </div>

                  </TableCell>
                  <TableCell className="tableCell">{row.customer}</TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>
                  <TableCell className="tableCell">{row.amount}</TableCell>
                  <TableCell className="tableCell">
                    <span className={`stutas ${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default List