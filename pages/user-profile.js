function UserProfilePage(props) {
  return <h1>hi {props.username}</h1>;
}

export async function getServerSideProps(ctx) {
    const {params, req, res} = ctx;


  return {
    props: {
      username: "Jinyong",
    },
  };
}

export default UserProfilePage;
