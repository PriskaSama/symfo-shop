<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'app_admin')]
    #[IsGranted('ROLE_ADMIN')]
    public function index(SerializerInterface $serializer): Response
    {
        return $this->render('admin/admin.html.twig', [
            'controller_name' => 'AdminController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
