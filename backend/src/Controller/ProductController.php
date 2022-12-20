<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ProductController extends AbstractController
{
    #[Route('/products', name: 'app_product')]
    public function index(SerializerInterface $serializer): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }

    #[Route('/products/create', name: 'app_product_create')]
    public function create($serializer): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }

    #[Route('/products/show/{id}', name: 'app_product_show')]
    public function show($serializer): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }

    #[Route('/products/edit/{id}', name: 'app_product_edit')]
    public function edit($serializer): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
