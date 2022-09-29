import axios from 'axios'

const httpSignal=axios.create(
    {
    baseURL:"http://localhost:3000/660/",
    headers:{
        "Authorization": "Bearer "+ sessionStorage.getItem("jwt")
    }
})

export class CommentServicesExample{

    getComments = () => {
        return httpSignal.get("comments")
      }

    postComment =(body,author)=>{
        return httpSignal.post("comments",
        {
          "body": body,
          "author": author
        })
    }

    deleteComment(id) {
        return httpSignal.delete("comments/" + id);
    }

    putComment(id,body,author){
        return httpSignal.patch("comments/"+id,{
            "body":body,
            "author":author
        })
    }

}