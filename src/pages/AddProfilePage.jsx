import Wrapper from "../Components/Wrapper";
import AddProfileForm from "../Components/AddProfileForm";


const AddProfilePage = ( { updateProfiles } ) => {
    return (
    <Wrapper id="add-profile">
        <h1>Add Profile</h1>
        <AddProfileForm onAddProfile={updateProfiles}/>
      </Wrapper>
    )
}

export default AddProfilePage;