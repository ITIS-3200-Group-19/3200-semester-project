// This file is for the mode toggle component.
// It will contain the toggle for users to switch between secure and vulnerable modes.

function ModeToggle({ mode, setMode }) {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="switch"
        onChange={() =>
          setMode(mode === "Vulnerable" ? "Secure" : "Vulnerable")
        }
      ></input>
      <label htmlFor="switch" className="toggle">
        {""}
      </label>
    </div>
  );
}

export default ModeToggle;
