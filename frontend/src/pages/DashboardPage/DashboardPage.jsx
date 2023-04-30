import "./DashboardPage.css";

export default function DashboardPage({ user }) {
  return (
    <div className="DashboardPage">
      <h1 className="ledgerly hidden">Money Master</h1>
      <div>
        <h2>{user.businessName}</h2>
        <p>
          Welcome to Money Master, <span>{user.name}</span>
        </p>
        {/* <p>This page is under development 🛠️</p> */}
      </div>
      <div></div>
    </div>
  );
}
