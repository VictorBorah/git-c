"use client";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "@/components/NavBar";
import { StudentForm } from "@/components/StudentForm";
import { PersonCard } from "@/components/PersonCard";
import { DataPanel } from "@/components/DataPanel";
import { data } from "autoprefixer";

export default function Home() {
  const sayHi = () => {
    toast.info("Hey Guyz! What's up?  Victor Borah here!");
  };

  const [people, setPeople] = React.useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.victorborah.cloud/webservices/v1/sa/fetchSampleData"
    );
    const data = await res.json();
    setPeople(data[0].Data);
    console.log(data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(people);

  const [formData, setFormData] = React.useState({
    username: "",
    mobile: "",
    email: "",
    address: "",
    hobbies: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const clearForm = () => {
    document.getElementById("studentForm").reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();
    formDataObject.append("Username", formData.username);
    formDataObject.append("Mobile", formData.mobile);
    formDataObject.append("Email", formData.email);
    formDataObject.append("Address", formData.address);
    formDataObject.append("Hobbies", formData.hobbies);
    formDataObject.append("Password", formData.password);

    const response = await fetch(
      "https://api.victorborah.cloud/webservices/v1/sa/createSample",
      {
        method: "POST",
        body: formDataObject,
      }
    );

    if (response.status === 200) {
      clearForm();
      await fetchData();
      const res = await response.json();
      toast.success(res[0].Message);
    } else {
      toast.error("Something went wrong!");
    }
  };

  /*
  const people = [
    {
      username: "John",
      age: 30,
      address: "Tezpur",
      mobile: "9954817702",
      email: "test@test.com",
      hobbies: "Singing, Dancing, Painting",
    },
    {
      username: "Richard",
      age: 30,
      address: "Tezpur",
      mobile: "9954817702",
      email: "test@test.com",
      hobbies: "Singing, Dancing, Painting",
    },
    {
      username: "Thomas",
      age: 30,
      address: "Tezpur",
      mobile: "9954817702",
      email: "test@test.com",
      hobbies: "Singing, Dancing, Painting",
    },
  ];
*/
  return (
    <main className="flex min-h-screen h-full w-full flex-col bg-slate-300">
      <NavBar sayHi={sayHi} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="grid  h-screen grid-cols-2 gap-1">
        <div className=" bg-zinc-50 h-[50%] p-10 mt-2 gap-1 border border-gray-300 rounded shadow-black block text-black">
          <StudentForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className=" bg-zinc-50 h-[80%] overflow-auto p-10 mt-2 gap-1 border border-gray-300 rounded shadow-black block text-black">
          <DataPanel people={people} />
        </div>
      </div>
    </main>
  );
}
