const fetchAllParents = async () => {
    const response = await fetch("/api/parents");

    try{
        if(!response.ok){
            throw new Error("Server broke due to errors")
        }
        const data = await response.json();

        console.log(data);

    }catch(Err) {
        console.log("Network error!", Err.message);
    }
}

fetchAllParents();