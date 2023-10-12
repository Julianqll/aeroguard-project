"use client";
import { Container, Grid, SimpleGrid } from "@mantine/core";

  
export function DataCard({
    title, value, description
  }: {
    title: string, value: string, description: string
  }) {

    const demoProps = {
        bg: 'var(--mantine-color-blue-light)',
        h: 'auto',
        m: 'md',
        w: '200',
        
        };
    return (
        <Container size="xs" {...demoProps}>
            <SimpleGrid cols={2}>
            <div>Total engagement</div>
            <div>i</div>
            <div>34</div>
            </SimpleGrid>
        </Container>
    );
}