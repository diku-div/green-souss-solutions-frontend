import {FC} from 'react';
interface Headingprops{
    title: string;
    iscenter?: boolean;
}
const Heading :FC<Headingprops> = ({title, iscenter}) => {
return <h1
className={`font-extrabold text-lg md:text-4xl lg:text-5xl text-black/70 max-sm:text-center  ${iscenter ? 'text-center' : 'text-left'} tracking-wide text-wrap leading-tight capitalize`}>
{title}
</h1>
}
export default Heading;
