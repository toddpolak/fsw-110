const submitBtn = document.getElementById('btn-submit');
const txtBox1 = document.getElementById('txt-1');
const txtBox2 = document.getElementById('txt-2');
const txtBox3 = document.getElementById('txt-3');

function formSubmit() {
    let txtValue1 = txtBox1.value;
    let txtValue2 = txtBox2.value;
    let txtValue3 = txtBox3.value;

    alert(`1st Text Box: ${txtValue1}\n2nd Text Box: ${txtValue2}\n3rd Text Box: ${txtValue3}`);
    txtBox1.value = '';
    txtBox2.value = '';
    txtBox3.value = '';
}
submitBtn.addEventListener('click', formSubmit);