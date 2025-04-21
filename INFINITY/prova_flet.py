import flet as ft

def main(page: ft.Page):
    campo_tarefa = ft.TextField(label="Digite a tarefa...")
    lista = ft.Column()

    def adicionar_click(e):
        if campo_tarefa.value != "":
            lista.controls.append(ft.Text(campo_tarefa.value))
            campo_tarefa.value = ""
            page.update()

    botao = ft.ElevatedButton("Adicionar Tarefa", on_click=adicionar_click)
    page.add(campo_tarefa, botao, lista)

ft.app(target=main)