function updateFilters() {
    localStorage.setItem('filter_type', typeFilter.value);
    localStorage.setItem('filter_tonnage', tonnageFilter.value);
    renderCatalog();
}

typeFilter.addEventListener('change', updateFilters);
tonnageFilter.addEventListener('input', updateFilters);

catalogList.addEventListener('click', (e) => {
    const btn = e.target.closest('.catalog-card__btn');
    if (btn) {
        modal.showModal();
    }
});