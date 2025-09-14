import { GenerateItem } from "@/lib/types";
import {
  Image,
  Video,
  Zap,
  Wand2,
  Edit3,
  VideoIcon,
  Users,
  Brain,
} from "lucide-react";
import GenerateCard from "./GenerateCard";

const generateItems: GenerateItem[] = [
  {
    id: "image",
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram",
    icon: <Image size={24} className="text-white" />,
    isNew: true,
    bgColor: "bg-blue-500",
  },
  {
    id: "video",
    title: "Video",
    description: "Generate videos with Haiper, Pika, Runway, Luma, and more",
    icon: <Video size={24} className="text-white" />,
    bgColor: "bg-yellow-500",
  },
  {
    id: "realtime",
    title: "Realtime",
    description: "Realtime AI rendering at a canvas instant feedback loops",
    icon: <Zap size={24} className="text-white" />,
    bgColor: "bg-cyan-500",
  },
  {
    id: "enhancer",
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 32x",
    icon: <Wand2 size={24} className="text-white" />,
    isNew: true,
    bgColor: "bg-gray-800",
  },
  {
    id: "edit",
    title: "Edit",
    description: "Edit photos: change style, or expand photos and generations",
    icon: <Edit3 size={24} className="text-white" />,
    isNew: true,
    bgColor: "bg-purple-600",
  },
  {
    id: "video-upscale",
    title: "Video Upscale",
    description: "Lip sync any video to any audio",
    icon: <VideoIcon size={24} className="text-white" />,
    isNew: true,
    bgColor: "bg-teal-600",
  },
  {
    id: "motion-transfer",
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    icon: <Users size={24} className="text-white" />,
    isNew: true,
    bgColor: "bg-gray-900",
  },
  {
    id: "train",
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters",
    icon: <Brain size={24} className="text-white" />,
    bgColor: "bg-orange-500",
  },
];

export default function GenerateSection() {
  return <GenerateCard generateItems={generateItems} />;
}
