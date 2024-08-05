import { useState } from 'react';
import { ethers } from 'ethers';
import HospitalManagement from '../artifacts/contracts/HospitalManagement.sol/HospitalManagement.json';

export default function HospitalManagementApp() {
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientHistory, setPatientHistory] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [doctorSpecialty, setDoctorSpecialty] = useState('');
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  async function addPatient() {
    if (!patientName || !patientAge || !patientHistory) return;
    // Add code to interact with the smart contract
  }

  async function addDoctor() {
    if (!doctorName || !doctorSpecialty) return;
    // Add code to interact with the smart contract
  }

  return (
    <div>
      <h1>Hospital Management System</h1>
      <div>
        <h2>Add Patient</h2>
        <input
          onChange={e => setPatientName(e.target.value)}
          placeholder="Name"
        />
        <input
          onChange={e => setPatientAge(e.target.value)}
          placeholder="Age"
        />
        <input
          onChange={e => setPatientHistory(e.target.value)}
          placeholder="Medical History"
        />
        <button onClick={addPatient}>Add Patient</button>
      </div>
      <div>
        <h2>Add Doctor</h2>
        <input
          onChange={e => setDoctorName(e.target.value)}
          placeholder="Name"
        />
        <input
          onChange={e => setDoctorSpecialty(e.target.value)}
          placeholder="Specialty"
        />
        <button onClick={addDoctor}>Add Doctor</button>
      </div>
      {/* Add code to display the list of patients and doctors */}
    </div>
  );
}
