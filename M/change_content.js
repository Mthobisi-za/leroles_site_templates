const sizes = [
    { cl_ass: 'M-001', width: '20%', height: '90vh' },
    { cl_ass: 'M-002', width: '30%', height: '90vh' },
    { cl_ass: 'M-003', width: '40%', height: '90vh' },
    { cl_ass: 'M-004', width: '50%', height: '90vh' },
    { cl_ass: 'M-005', width: '70%', height: '80vh' },
    { cl_ass: 'M-006', width: '60%', height: '80vh' },
    { cl_ass: 'M-007', width: '70%', height: '75vh' },
    { cl_ass: 'M-008', width: '70%', height: '70vh' },
    { cl_ass: 'M-009', width: '70%', height: '85vh' },
    { cl_ass: 'M-010', width: '70%', height: '85vh' },
    { cl_ass: 'M-011', width: '70%', height: '85vh' },
    { cl_ass: 'M-012', width: '70%', height: '60vh' },
    { cl_ass: 'M-013', width: '40%', height: '90vh' },
    { cl_ass: 'M-014', width: '50%', height: '90vh' },
    { cl_ass: 'M-015', width: '70%', height: '90vh' },
    { cl_ass: 'M-016', width: '65%', height: '80vh' },
    { cl_ass: 'M-017', width: '70%', height: '70vh' },
    { cl_ass: 'M-018', width: '70%', height: '75vh' },
    { cl_ass: 'M-019', width: '70%', height: '70vh' },
    { cl_ass: 'M-020', width: '70%', height: '65vh' },
    { cl_ass: 'M-021', width: '70%', height: '60vh' },
    { cl_ass: 'M-022', width: '70%', height: '60vh' },
    { cl_ass: 'M-023', width: '70%', height: '65vh' },
    { cl_ass: 'M-024', width: '70%', height: '80vh' },
    { cl_ass: 'M-025', width: '40%', height: '90vh' },
    { cl_ass: 'M-026', width: '50%', height: '90vh' },
    { cl_ass: 'M-027', width: '90%', height: '90vh' },
    { cl_ass: 'M-028', width: '70%', height: '80vh' },
    { cl_ass: 'M-029', width: '70%', height: '80vh' },
    { cl_ass: 'M-030', width: '70%', height: '80vh' },
    { cl_ass: 'M-031', width: '70%', height: '80vh' },
    { cl_ass: 'M-032', width: '70%', height: '80vh' },
    { cl_ass: 'M-033', width: '70%', height: '80vh' },
    { cl_ass: 'M-034', width: '70%', height: '80vh' },
    { cl_ass: 'M-035', width: '70%', height: '80vh' },
    { cl_ass: 'M-036', width: '70%', height: '80vh' },
    { cl_ass: 'M-037', width: '70%', height: '80vh' },
    { cl_ass: 'M-038', width: '70%', height: '80vh' },
    { cl_ass: 'M-039', width: '70%', height: '80vh' },
    { cl_ass: 'M-040', width: '70%', height: '80vh' },
    { cl_ass: 'M-041', width: '70%', height: '80vh' },
    { cl_ass: 'M-042', width: '70%', height: '80vh' },
    { cl_ass: 'M-043', width: '70%', height: '80vh' },
    { cl_ass: 'M-044', width: '70%', height: '80vh' },
    { cl_ass: 'M-045', width: '70%', height: '80vh' },
    { cl_ass: 'M-046', width: '70%', height: '80vh' },
    { cl_ass: 'M-047', width: '70%', height: '80vh' },
    { cl_ass: 'M-048', width: '70%', height: '80vh' },
    { cl_ass: 'M-049', width: '70%', height: '80vh' },
    { cl_ass: 'M-050', width: '70%', height: '80vh' },


]

function change_size(elemnt) {
    console.log(elemnt.textContent)
    sizes.forEach((ele) => {
        if (ele.cl_ass === elemnt.textContent) {
            console.log(true)
            document.querySelector('.div').style.width = ele.width;
            document.querySelector('.div').style.height = ele.height;
        }
    });
}