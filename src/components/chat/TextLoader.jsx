import { ThreeDots } from "react-loader-spinner"
const TextLoader=()=>{
return (<>
<div className={"message loader"}>
<ThreeDots height="40" width="80" radius="9"color="#fff" ariaLabel="three-dots-loading"wrapperStyle={{}}wrapperClassName=""visible={true} />
</div>
</>)}
export default TextLoader;
