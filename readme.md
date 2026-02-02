# Sistema de Cadastro de Funcionários e Itens

Projeto desenvolvido em **equipe**, com foco no **aprendizado prático de desenvolvimento web** e na aplicação de **boas práticas de versionamento e colaboração** utilizando Git e GitHub.

O sistema tem como objetivo consolidar conhecimentos em **HTML, CSS e JavaScript**, além de promover organização de código, trabalho colaborativo e uso de um fluxo de desenvolvimento simples e padronizado.

---

## 🎯 Objetivo do Projeto

Criar um sistema de cadastro de funcionários, permitindo ao grupo aplicar, na prática:

- Estruturação semântica de páginas com HTML
- Estilização e organização visual com CSS
- Lógica de programação com JavaScript
- Controle de versão com Git
- Colaboração em equipe com GitHub (branches, commits e Pull Requests)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Git & GitHub**
- **Visual Studio Code**

---

## 📋 Requisitos para Execução

- Navegador web atualizado
- Git instalado
- Editor de código (recomendado: VS Code)

---

## 🎨 Identidade Visual (Padrão do Projeto)

Esta seção define os padrões visuais do projeto.  
Ela deve ser seguida por todos os integrantes para manter consistência na interface.

### 🔤 Tipografia

- **Fonte principal:** `Roboto`
- **Fonte alternativa (fallback):** `sans-serif`

**Uso recomendado:**
- **Títulos:** peso médio ou negrito
- **Textos:** peso regular

---

### 🎨 Paleta de Cores

| Uso | Descrição | Cor (Hex) |
|----|----|----|
| Primária | Cor principal do sistema | `#10609c` |
| Secundária | Destaques e ações secundárias | `#f26b10` |
| Background | Fundo das páginas | `#eef0ea` |
| Texto | Texto principal | `#8c8c8c` |
| Sucesso | Ações concluídas | `#399f1f` |
| Erro | Mensagens de erro | `#f26b10` |


---

## 🔄 Fluxo de Trabalho (Git)

Para manter o projeto organizado e facilitar o aprendizado em equipe, seguimos um fluxo simples:

### Criar uma branch para cada tarefa
```bash
git checkout main
git pull origin main
git checkout -b feature/nome-da-tarefa
```
### Atualizar a branch após o merge
```bash
-A main foi atualizada (merge feito)

-O time foi avisado:
"A funcionalidade X foi mesclada na main. Atualizem suas branches antes de continuar."

-Cada integrante já tem uma branch criada e com trabalho em andamento

1️⃣ Salvar o que já foi feito (obrigatório)
git status

Se houver arquivos modificados:
git add .
git commit -m "chore: salva progresso antes de atualizar main"

2️⃣ Atualizar a branch main local
git checkout main
git pull origin main

3️⃣ Voltar para sua branch de trabalho
git checkout feature/sua-branch

4️⃣ Trazer as atualizações da main para sua branch
git merge main


Se aparecer conflito:

-Resolva os arquivos indicados
-Salve
-Faça o commit do merge
```

---

## ⚙️ Realizar commits claros e objetivos

Os commits devem indicar o tipo da alteração realizada.
Abaixo estão exemplos de commits que devem ser usados no projeto:

```bash
feat: adiciona cadastro de funcionários

feat: cria formulário de cadastro de itens

fix: corrige validação do campo nome

style: ajusta layout da tabela de funcionários

docs: atualiza instruções do README

refactor: reorganiza funções de cadastro