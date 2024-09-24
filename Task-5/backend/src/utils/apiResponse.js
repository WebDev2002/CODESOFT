class apiResponse{
constructor(
    statuscode,
    message="success",
    data,
)
{
    this.statuscode=statuscode,
    this.message= message,
    this.success= statuscode,
    this.data=data
}
}

export{apiResponse}