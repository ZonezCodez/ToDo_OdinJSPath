export default function handleProjForm(form){
    let formData = new FormData(form);
    console.log(formData.get('Project'));
}