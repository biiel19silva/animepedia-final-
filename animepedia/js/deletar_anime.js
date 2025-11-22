function deleteAnime(id) {
    if (!confirm("Tem certeza que deseja excluir este personagem?")) {
        return;
    }

    fetch(`http://localhost/animepedia/backend/api.php?resource=animes&id=${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "_method=DELETE"
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || "Personagem excluído.");
        window.location.reload();
    })
    .catch(err => {
        alert("Erro ao excluir o personagem.");
        console.error(err);
    });
}
