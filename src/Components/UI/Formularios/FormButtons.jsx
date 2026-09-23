export default function FormButton({color="theme-primary", textColor="theme-white",type="", label=""}){
    return(
        <div>
            <div>
                <button type={type} className={`w-full bg-${color} py-2 rounded-md text-${textColor} hover:cursor-pointer`}>{label}</button>
            </div>
        </div>
    )
}