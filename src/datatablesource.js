export const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'user',
        headerName: 'User',
        width: 240,
        renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                   <img className="cellImg" src={params.row.img} alt="" />
                   {params.row.userName}
                </div>
            )}
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 230,
      },
      {
        field: 'age',
        headerName: 'Age',
        width: 140,
      },
      {
      field: 'status',
      headerName: 'Status',
      width: 230,
      renderCell:(params)=>{
          return(
              <div className={`cellWithStatus ${params.row.status}`}>
                 
                 {params.row.status}
              </div>
          )}
    },
]



export const userRows = [
    {
        id:1,
        userName:"Aya",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        status:"active",
        email:"aya2222@gmail.com",
        age:"25"
    },
    {
        id:2,
        userName:"Asia",
        img:"https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg",
        status:"pending",
        email:"asia2222@gmail.com",
        age:"21"
    },
    {
        id:3,
        userName:"Hend",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirLCmqMLUiSXK_dDc_8rf9-0ZTGheRejJrA&usqp=CAU",
        status:"passive",
        email:"hend2222@gmail.com",
        age:"29"
    },

]