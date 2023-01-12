import { useFetchAlbumsQuery,useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./Expandalbepanel";
import Button from './Button'
function AlbumsList({ user }) {
  const {data,error,isLoading}=useFetchAlbumsQuery(user)
  const [addAlbum,resultes]=useAddAlbumMutation()
  const handleAddAlbum=()=>{
    addAlbum(user)
  }
  let content
  if(isLoading){
    content=<Skeleton times={3}/>

  }else if(error){
    content=<div>Error loading albums.</div>
  }else{
    content=data.map(album=>{
      const header=<div>{album.title}</div>
      return<ExpandablePanel key={album.id} header={header}>
        List of posts in the album
      </ExpandablePanel>
    })
  }
  return <div>
    <div>Albums for {user.name}
    <Button onClick={handleAddAlbum}>click!</Button></div>Albums for {user.name}</div>;
}

export default AlbumsList;
