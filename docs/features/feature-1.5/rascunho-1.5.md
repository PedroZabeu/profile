# Estrutura de pastas

## Conteiner Principal:

components/sections/ProjectSection.tsx

junta tudo, inclusive os componentes individuais de cada projeto

## Componentes Individuais por Projeto:

components/blocks/projects/BettingMGMT.tsx
components/blocks/projects/SchoolOfBets.tsx
components/blocks/projects/Stakely.tsx

pega os templates para features, junta e adapta para criar os 

## Template da Feature

components/blocks/projects/templates/ProjectFeature.tsx # Template Genérico para as Features

## Template das Partes que irão compor o template da feature:

components/ui/projects/project-feature-text.tsx # area do texto
components/ui/projects/project-feature-demo.tsx # area do demo
