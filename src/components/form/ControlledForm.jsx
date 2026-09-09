import React, { useRef } from "react";

const ControlledForm = () => {

    const styles = {
        card: {
          maxWidth: "480px",
          margin: "40px auto",
          padding: "32px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          border: "1px solid #e2e8f0",
        },
        title: {
          margin: "0 0 24px 0",
          fontSize: "22px",
          fontWeight: "600",
          color: "#0f172a",
          textAlign: "center",
        },
        form: {
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        },
        fieldGroup: {
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        },
        label: {
          fontSize: "14px",
          fontWeight: "500",
          color: "#334155",
        },
        input: {
          padding: "10px 14px",
          fontSize: "14px",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          outline: "none",
          color: "#0f172a",
          backgroundColor: "#f8fafc",
          transition: "border-color 0.2s, box-shadow 0.2s",
        },
        button: {
          marginTop: "8px",
          padding: "12px 16px",
          fontSize: "15px",
          fontWeight: "600",
          color: "#ffffff",
          backgroundColor: "#2563eb",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "background-color 0.2s",
        },
      };

  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let designationRef = useRef();
  let joiningDateRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    let employeeDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      designation: designationRef.current.value,
      joiningDate: joiningDateRef.current.value,
    };
    console.log(employeeDetails);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Employee Registration</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.fieldGroup}>
          <label htmlFor="employeeName" style={styles.label}>
            Employee Name
          </label>
          <input
            id="employeeName"
            type="text"
            ref={nameRef}
            placeholder="e.g. Jane Doe"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.fieldGroup}>
          <label htmlFor="email" style={styles.label}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            ref={emailRef}
            placeholder="e.g. jane.doe@company.com"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.fieldGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="••••••••"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.fieldGroup}>
          <label htmlFor="designation" style={styles.label}>
            Designation
          </label>
          <input
            id="designation"
            type="text"
            ref={designationRef}
            placeholder="e.g. Senior Software Engineer"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.fieldGroup}>
          <label htmlFor="joiningDate" style={styles.label}>
            Joining Date
          </label>
          <input
            id="joiningDate"
            type="date"
            ref={joiningDateRef}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Submit Employee Info
        </button>
      </form>
    </div>
  );

  
};

export default ControlledForm;
