import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-blue-700 p-5 border-8 border-cyan-400 md:bg-red-700">
        Hello world!
      </h1>
      <button className="uppercase rounded-4xl w-80 bg-green-700  md:bg-red-500 hover:bg-amber-400 cursor-pointer p-5 font-bold text-white text-4xl ">
        Me clique
      </button>
      <div className="">
        <form action="https://getform.io/f/byvyjzma" method="POST">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="message" />
        {/* add hidden Honeypot input to prevent spams */}
        <input
          type="hidden"
          name="_gotcha"
          style={{ display: "none !important" }}
        />
        {/* checkbox handle */}
        <input
          type="checkbox"
          name="subscribe"
          defaultValue="yes"
          defaultChecked=""
        />
        <input type="hidden" name="subscribe" defaultValue="no" />
        {/* radio button handle */}
        <input
          type="radio"
          name="gender"
          defaultValue="male"
          defaultChecked=""
        />
        <input type="radio" name="gender" defaultValue="female" />
        <input type="radio" name="gender" defaultValue="other" />
        {/* select field handle */}
        <select name="work-experience">
          <option value="one-year">0-1 years</option>
          <option value="one-five-years">1-5 years</option>
        </select>
        <button type="submit">Send</button>
      </form>
      </div>
      
    </div>
  );
}

export default App;
