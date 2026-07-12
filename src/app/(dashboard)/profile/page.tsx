export default async function ProfilePage() {
  // Simulate a delay to mock fetching data and showcase the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section>
      <h2 className="dashboard-card-header">Profile</h2>
      <p>This is the profile page.</p>
    </section>
  );
}