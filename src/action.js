


   const addUsers =()=>(dispach:any)=>{

    let url= "https://reqres.in/api/users";
    const userData=[];

    let result =fetch(url).then((data)=>{
  data.json().then((dataJs)=>{
   
    for(let i=1;i<=dataJs.total_pages;i++){
        fetch(url+`?page=${i}`).then((data1)=>{
            data1.json().then((dataJson)=>{
                dataJson.data.map((item)=>{
                console.log("DAtAJSON",item);

                userData.push(item)
                if(i===dataJs.total_pages){
                    dispach({
                        type: "ADD_USERS",
                        id: userData,
                    })
                }

                })
            })
        }

    )
    }
    
    return;

  })
})

  }

  const fetchUser=({id})=>(dispach:any)=>{
    let url= `https://reqres.in/api/users/${id}`;
let result =fetch(url).then((data)=>{
    data.json().then((dataJson)=>{
        return dispach({
                type: "FETCH_USER",
                currUser: dataJson.data,
        })
    
    })
    }
    )
    }


export {
    addUsers,
    fetchUser
}