import React from "react";
import { Box, Flex, Select, Checkbox, CheckboxGroup, VStack, Heading, Text, Button, useColorModeValue, Container } from "@chakra-ui/react";
import { FaSyringe } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("orange.100", "orange.900");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" bg={bgColor} p={5} borderRadius="md" boxShadow="md">
        <Heading as="h1" size="lg" mb={4} color={color}>
          Asesor de Vacunas para Profesionales de la Salud
        </Heading>
        <Text color={color} mb={4}>
          Un servicio especializado en identificar necesidades de vacunación personalizada para pacientes inmunocomprometidos.
        </Text>

        <Heading as="h2" size="md" mb={2} color={color}>
          Evaluación Integral del Paciente
        </Heading>
        <Select placeholder="Seleccione el tipo de perfil profesional" mb={3}>
          <option>Unidad de Medicina Preventiva y Salud Pública</option>
          <option>Centro de Vacunación Internacional</option>
          {/* ... More options */}
        </Select>

        <CheckboxGroup colorScheme="green" mb={3}>
          <VStack alignItems="flex-start">
            <Checkbox>Varón</Checkbox>
            <Checkbox>Mujer</Checkbox>
            {/* ... More checkboxes */}
          </VStack>
        </CheckboxGroup>

        <Select placeholder="CC.AA del paciente a tratar" mb={3}>
          {/* Desplegable con todas las Comunidades Autónomas */}
          <option>Andalucía</option>
          <option>Aragón</option>
          {/* ... More options */}
        </Select>

        <Heading as="h3" size="sm" mb={2} color={color}>
          Factores de Riesgo del Paciente
        </Heading>
        <CheckboxGroup colorScheme="blue" mb={3}>
          <VStack alignItems="flex-start">
            <Checkbox>Pacientes institucionalizados edad avanzada</Checkbox>
            <Checkbox>Enfermedades crónicas</Checkbox>
            {/* ... More checkboxes */}
          </VStack>
        </CheckboxGroup>

        <Button rightIcon={<FaSyringe />} colorScheme="teal" mb={4}>
          Generar Recomendaciones
        </Button>

        <Box bg="white" p={4} borderRadius="md" color="gray.800">
          <Heading as="h4" size="md" mb={2}>
            Recomendaciones de Vacunación
          </Heading>
          {/* Aquí se mostrarían los resultados de las recomendaciones */}
          <Text>No hay recomendaciones disponibles.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
