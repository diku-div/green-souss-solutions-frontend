import {FC, ReactNode} from 'react';
interface ButtonProps {
  variante?: 'primary' | 'secondary' | 'output' | 'nature';
  isfullwidth?: boolean;
  children?: ReactNode;
}
const Button: FC<ButtonProps> = ({variante='primary',isfullwidth,children}) => {


   if(variante === 'primary') {
     return (
    <button type='submit' className={`relative px-8 py-2.5 overflow-hidden group bg-gradient-to-r from-green-100 to-green-600 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-700 text-white transition-all ease-out duration-500 rounded-4xl ${isfullwidth ? 'w-full' : ''}`}>
      <span className={`absolute right-0 w-10 h-full top-0 transition-all  transform translate-x-12 bg-white opacity-10 -skew-x-12 ${isfullwidth ? 'group-hover:-translate-x-120 duration-2000' : 'group-hover:-translate-x-36 duration-1000'}  ease`} />
      <span className="relative text-sm md:text-lg font-semibold text-nowrap">{children}</span>
    </button>
  );
}


  if(variante === 'secondary') {
     return (
    <button type='submit'  className="px-8  py-2 text-black/50  hover:text-green-600 rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-black/20 hover:scale-105 hover:border-green-600 hover:shadow-black/20 hover:shadow-md focus:outline-none text-sm md:text-lg font-semibold text-nowrap" id="startButton">
      {children}
    </button>
  );}
  if(variante === 'nature') {
       return (
      <button type='submit'>
    <div className="relative group w-full  flex items-center justify-center ">
      <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-4xl bg-black/50 z-10">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12" />
        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-4xl inset-0.5 bg-black/50">
          <button name="text" className="input font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-4xl bg-black/50">
            {children}
          </button>
        </div>
        <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-800/70 to-yellow-100/70 blur-[30px]" />
      </div>
    </div>
    </button>
  );

  }

    
  return (
   
  <div>

  </div>
  );
  
};
export default Button;
