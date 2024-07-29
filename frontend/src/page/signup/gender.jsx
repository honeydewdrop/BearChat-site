const Gendercheck = ({ oncheckBoxChange, selectedGender }) => {
  return (
      <div className='flex'>
          <div className="form-control">
              <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                  <span className="label-text font-mono">male</span>
                  <input 
                      type="checkbox" 
                      className='checkbox border-slate-900' 
                      checked={selectedGender === "male"} // check if selected gender is male
                      onChange={() => oncheckBoxChange("male")} // update gender on change
                  />
              </label>
          </div>
          <div className="form-control">
              <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                  <span className="label-text font-mono">female</span>
                  <input 
                      type="checkbox" 
                      className='checkbox border-slate-900' 
                      checked={selectedGender === "female"} // check if selected gender is female
                      onChange={() => oncheckBoxChange("female")} // update gender on change
                  />
              </label>
          </div>
          <div className="form-control">
              <label className={`label gap-2 cursor-pointer ${selectedGender === "other" ? "selected" : ""}`}>
                  <span className="label-text font-mono">other</span>
                  <input 
                      type="checkbox" 
                      className='checkbox border-slate-900'
                      checked={selectedGender === "other"} // check if selected gender is other
                      onChange={() => oncheckBoxChange("other")} // update gender on change
                  />
              </label>
          </div>
      </div>
  );
};

export default Gendercheck;

// const Gendercheck = () => {
//     return (
//         <div className='flex'>
//             <div className="form-control">
//   <label className="label gap-2 cursor-pointer">
//     <span className="label-text font-mono">Male  </span>
//     <input type="checkbox"  className='checkbox border-slate-900' />
//   </label>
//   </div>
//   <div className="form-control">
//   <label className="label gap-2 cursor-pointer">
//     <span className="label-text font-mono">Female  </span>
//     <input type="checkbox" className='checkbox border-slate-900 '/>
//   </label>
//   </div>
//   <div className="form-control">
//   <label className="label gap-2 cursor-pointer">
//     <span className="label-text font-mono">Other  </span>
//     <input type="checkbox" className='checkbox border-slate-900'/>
//   </label>
// </div>
// </div>
//     )
// }

// export default Gendercheck;