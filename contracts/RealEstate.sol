// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HospitalManagement {
    struct Patient {
        uint id;
        string name;
        uint age;
        string medicalHistory;
    }

    struct Doctor {
        uint id;
        string name;
        string specialty;
        uint[] patientIds;
    }

    mapping(uint => Patient) public patients;
    mapping(uint => Doctor) public doctors;
    uint public patientCount;
    uint public doctorCount;

    function addPatient(string memory _name, uint _age, string memory _medicalHistory) public {
        patientCount++;
        patients[patientCount] = Patient(patientCount, _name, _age, _medicalHistory);
    }

    function addDoctor(string memory _name, string memory _specialty) public {
        doctorCount++;
        doctors[doctorCount] = Doctor(doctorCount, _name, _specialty, new uint[](0));
    }

    function assignPatientToDoctor(uint _patientId, uint _doctorId) public {
        require(_patientId > 0 && _patientId <= patientCount, "Invalid patient ID");
        require(_doctorId > 0 && _doctorId <= doctorCount, "Invalid doctor ID");
        doctors[_doctorId].patientIds.push(_patientId);
    }

    function getDoctorPatients(uint _doctorId) public view returns (uint[] memory) {
        require(_doctorId > 0 && _doctorId <= doctorCount, "Invalid doctor ID");
        return doctors[_doctorId].patientIds;
    }
}
