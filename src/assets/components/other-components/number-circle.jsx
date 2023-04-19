export const NumberCircle = (props) =>{
    return(
        <div className='w-10 flex flex-row items-center justify-center text-white h-7 rounded-2xl bg-blue-600'>
            {props.count}
        </div>
    )
}