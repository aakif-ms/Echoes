export default function InputBox({type, text}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={type} className="mb-3 font-ubuntu text-lg">
              {text}
            </label>
            <input
              type={type}
              name={type}
              id={type}
              className="w-full lg:w-3/5 border-purple-400 border-2 px-6 lg:px-10 py-3 lg:py-5 rounded-full text-sm lg:text-xl font-gummy focus:outline-none"
            />
          </div>
    )
}