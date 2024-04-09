import useFetch from "../../hooks/useFetch";
import { baseUrl } from "../../hooks/api";
import "./Featured.css";

const Featured = () => {
  const {data, loading} = useFetch(`${baseUrl}/hotel/countByCity?cities=Delhi,Varanasi,Vns`)
  const featureItem = [
    {
      img :"https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
      city : "Delhi"
    },
    {
      img :"https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=",
      city : "Varanasi"
    },
    {
      img :"https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
      city : "Mumbai"
    }
  ]
  return (
    <div className="featured">
      {loading ? "Loading wait...":
      <>
      {featureItem?.map((item,i)=>{
        return (
      <div className="featuredItem">
        <img
          src={item.img}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{item.city}</h1>
          <h2>{data[i]} properties</h2>
        </div>
      </div>
        )
      })}
      </>
}
    </div>
  );
};

export default Featured;