import { useState } from 'react';
import ReactSwitch from 'react-switch';

function App() {
  // Initial state for the students and their switch states
  const initialStudents = [
    { name: 'Prashant Acharya', isPresent: false, isAbsent: false },
    { name: 'Pratik Acharya', isPresent: false, isAbsent: false },
    { name: 'Rajan Gurung', isPresent: false, isAbsent: false },
    { name: 'Samrat Kumar Adhikari', isPresent: false, isAbsent: false },
    { name: 'Samundra Dawadi', isPresent: false, isAbsent: false },
    { name: 'Saugat Neupane', isPresent: false, isAbsent: false },
    { name: 'Shubham Chapagain', isPresent: false, isAbsent: false },
    { name: 'Shubham Man Singh Baidhya', isPresent: false, isAbsent: false },
    { name: 'Siddhant Shrestha', isPresent: false, isAbsent: false },
    { name: 'Smarika Shrestha', isPresent: false, isAbsent: false },
    { name: 'Smriti BK', isPresent: false, isAbsent: false },
    { name: 'Suprem Shrestha', isPresent: false, isAbsent: false },
    { name: 'Suyasha Nepal', isPresent: false, isAbsent: false },
    { name: 'Unik Aryal', isPresent: false, isAbsent: false },
    { name: 'Utsarga Regmi', isPresent: false, isAbsent: false },
  ];

  // State to manage all students
  const [students, setStudents] = useState(initialStudents);

  // Function to handle switch changes
  const handleSwitchChange = (index, switchType) => {
    setStudents((prevStudents) => {
      const newStudents = [...prevStudents];
      newStudents[index] = {
        ...newStudents[index],
        isPresent: switchType === 'present' ? true : false,
        isAbsent: switchType === 'absent' ? true : false,
      };
      return newStudents;
    });
  };

  return (
    <div>
      <table
        style={{
          border: '1px solid black',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>
                <ReactSwitch
                  onChange={() => handleSwitchChange(index, 'present')}
                  checked={student.isPresent}
                />
              </td>
              <td>
                <ReactSwitch
                  onChange={() => handleSwitchChange(index, 'absent')}
                  checked={student.isAbsent}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

// import { useState } from 'react';
// import ReactSwitch from 'react-switch';

// function App() {
//   const [isSwitch1On, setIsSwitch1On] = useState(false);
//   const [isSwitch2On, setIsSwitch2On] = useState(false);

//   const handleSwitch1Change = () => {
//     setIsSwitch1On(true);
//     setIsSwitch2On(false);
//   };

//   const handleSwitch2Change = () => {
//     setIsSwitch2On(true);
//     setIsSwitch1On(false);
//   };

//   return (
//     <div>
//       <table
//         style={{
//           border: '1px solid black',
//           borderCollapse: 'collapse',
//         }}
//       >
//         <tr>
//           <th>Student Name</th>
//           <th>Present</th>
//           <th>Absent</th>
//         </tr>
//         <tr>
//           <td>Prashant Acharya</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Pratik Acharya</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Rajan Gurung</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Samrat Kumar Adhikari</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Samundra Dawadi</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Saugat Neupane</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Shubham Chapagain</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Shubham Man Singh Baidhya</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Siddhant Shrestha</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Smarika Shrestha</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Smriti BK</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Suprem Shrestha</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Suyasha Nepal</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Unik Aryal</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//         <tr>
//           <td>Utsarga Regmi</td>
//           <td>
//             <ReactSwitch onChange={handleSwitch1Change} checked={isSwitch1On} />
//           </td>
//           <td>
//             <ReactSwitch onChange={handleSwitch2Change} checked={isSwitch2On} />
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }

// export default App;
