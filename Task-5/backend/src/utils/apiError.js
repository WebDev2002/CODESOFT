class apiError extends Error{
    constructor(
        statuscode,
        message="Something Wents Wrong",
        error=[],
        stack=""
    )

   {
    super(message),
    this.statuscode = statuscode,
    this.message= message,
    this.success = false,
    this.data =null,
    this.error=error


    if(stack){
        this.stack=stack
    }else{
        Error.captureStackTrace(this, this.constructor)
    }

   }
}

export{apiError}