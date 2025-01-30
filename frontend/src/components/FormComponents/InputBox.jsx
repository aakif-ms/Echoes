export default function InputBox({ text, entry, type, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="title" className="text-2xl font-semibold font-ubuntu">
        {text}
      </label>
      <input
        type={type}
        name={entry}
        id={type}
        onChange={onChange}
        className="bg-blue-200 border-black border-4 px-3 py-4 text-2xl rounded-xl font-gummy"
      />
    </div>
  );
}
