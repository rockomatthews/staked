import BetCard from "./BetCard";
import CallToAction from "./CallToAction";

function Dashboard({ activeBets }) {
    return (
      <main>
        {/* Display active bets */}
        {activeBets.map(bet => (
          <BetCard key={bet.id} bet={bet} />
        ))}
        <CallToAction />
      </main>
    );
  }

  export default Dashboard;