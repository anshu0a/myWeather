import "./loader.css"
export default function Loader({cityx}){
    return (
        <div className="outloader">
            <p>Searching for&nbsp;<span className="city">{cityx}</span>&nbsp;<span className=" sp1">.</span>&nbsp;<span className="sp2">.</span>&nbsp;<span className="sp3">.</span></p>
        </div>
    )
}