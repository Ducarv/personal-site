export function ProfileCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://github.com/ducarv.png"
          alt="Eduardo carvalho"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Eduardo Carvalho</h2>
        <p>A Software Engineer who has developed countless innovative solutions.</p>
        <div className="card-actions">
        </div>
      </div>
    </div>
  );
}
